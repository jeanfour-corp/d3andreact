import pandas as pd
import numpy as np

# Choose the number of weeks
w = 4*6

# Setup a database of appropriate length
db = pd.DataFrame(columns=['weeks', 'cost'])

# Population the db with fake data
db['weeks'] = [el for el in range(1,w+1)]
db['cost'] = np.random.normal(.9, .2, w)
filename = 'transactions.csv'
db.to_csv(filename, index=False)
