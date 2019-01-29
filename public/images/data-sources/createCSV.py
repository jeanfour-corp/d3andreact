import pandas as pd
import numpy as np

# Create random data for use with client application
# The random data created here will later be replaced by data stored on AWS
#
# Choose the number of weeks
w = 4*6

# Choose number of patients
n = 1000

# Choose cost per hospital stay/ negative outcome at each hospital
cost = [1000, 1500, 2000]

# Setup a database of appropriate length
db = pd.DataFrame(columns=['risk', 'totalnegative', 'hospital', 'costTS'])

# Population the db with fake data
risker = np.random.binomial(1, .2, n)
db['risk'] = risker
db['hospital'] = np.random.choice([0,1,2], n, p=[0.5, 1/3, 1/6])

# Calculate how many negative outcomes per patient
probability = [.025+.75*el for el in risker]
first = np.random.binomial(1, probability, n)
second = np.random.binomial(1, [.2*el for el in first], n)
third = np.random.binomial(1, [.3*el for el in second], n)
fourth = np.random.binomial(1, [.4*el for el in third], n)
db['totalnegative'] = np.add(np.add(np.add(first, second), third), fourth)
    
# Give a times series with n in any week there is a negative outcome
# Calculate how much money per week
def ts(m,c):
    loc = np.random.choice(range(w), m)
    f = lambda x: 1 if x in loc else 0
    return [f(el)*c for el in range(w)]

db['costTS'] = db.apply(lambda row: ts(row['totalnegative'], cost[row['hospital']]), axis=1)    

filename = 'fakedata.csv'
db.to_csv(filename, index=False)

def newdf(db):
    df = pd.DataFrame(columns=['week', 'risk', 'hospital', 'cost'])
    for i in range(n):
        patient = db.iloc[i]
        df2 = pd.DataFrame(columns=['week', 'risk', 'hospital', 'cost'])
        df2['week'] = np.random.choice(range(w), patient['totalnegative'])
        df2['risk'] = patient['risk']
        df2['hospital'] = patient['hospital']
        df2['cost'] = cost[patient['hospital']]
        df = df.append(df2)
    return df
df = newdf(db)
filename = 'hospitaldata.csv'
df.to_csv(filename, index=False)

