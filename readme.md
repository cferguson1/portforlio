How to deploy to live server
======

**Merge Dev Branch into Master**
After you've finished and tested a feature on your local dev environment, merge the newFeatureName Branch back into master. You'll need to checkin to the master branch, and pull from the github repository. The github directory is aliased "github" and the live server is aliased "LiveServer".

1. $ git checkout master
  1. Switches to the local master branch
2. $ git pull github master
  1. github is the name of the remote repo
  2. Resolve any conflicts
    1.Visit each conflicted file and resolve any conflicts. This will require a saving.
      1. Once conflicts are resolved and saved, they need committed and another pull of remote is required.
        1. $ git add -A
        2. $ git commit -am ‘Relevant detailed commit message.’
        3. $ git pull github master
3. $ git merge newFeatureName
  1. Resolve any conflicts

**Test** 
Test every aspect of the new feature.