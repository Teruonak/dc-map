## Configurations for collections

### run this to reset all collections
``` javascript
Meteor.call('resetAllCollections')
```

### run this to init the Company's collection
``` javascript
Meteor.call('initCompanyCollection')
```

### Company collection have only the Company's name and Must be:
- __1st__ an empty record `""`
- __2nd__ a `--Nova empresa--`

### Relation have the relation of company and the countries.
