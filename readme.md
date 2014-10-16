How to deploy to live server
======

**Merge Dev Branch into Master**
Upon completion of fully testing a new feature in your local dev environment merge the newFeatureName Branch back into master. To do this successfully you will need to first pull the remote master branch, ensuring your local master branch is up to date.
1. $ git checkout master
  1. Switches to the local master branch
2. $ git pull github master
  1. github is the name of the remote repo we will use to differentiate between our other remote deployment servers
  2. Resolve any conflicts
    1.Visit each conflicted file and resolve any conflicts. This will require a saving.
      1. Once conflicts are resolved and saved, they need committed and another pull of remote is required.
        1. $ git add -A
        2. $ git commit -am ‘Relevant detailed commit message.’
        3. $ git pull github master
3. $ git merge newFeatureName
  1. Resolve any conflicts (see 1.2.2)
4. Test 
You have just altered the code base since you last tested your new feature, additionally you might have broken someone else’s recent addition, congratulations! Take some time to work through and test out every aspect of your new feature.