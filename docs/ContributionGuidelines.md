# Contribution Guidelines 👥

This project is very open to contributions! If you have a feature request, or bug report, please open an issue with the applicable tag. If you would like to simply create a feature, [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) the repository and add in your changes. Then submit a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) which will be reviewed and eventually merged if it meets all contribution requirements.

## Project Set Up 🏗️

Use the steps below to clone the repository and get the project running on your local machine.

1. Navigate to the develop branch of the repository and click the green "Code" button. Then copy the repository URL with the method of your choosing. We suggest SSH which can be setup be following [these docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

2. Go to your terminal program of choice and navigate the the folder you want the project to live in. Then run the command below to clone the repository:
```
git clone <repository_url>
```
![image](https://user-images.githubusercontent.com/41388783/199371149-b3154e01-59e6-45e7-8a96-319ef9f7552a.png)

4. Now that the repository is cloned you can navigate into it with the command `cd <project_name>`. 

5. Once you are in the project you will need to install the node modules with the command `npm install`.

## Git Workflow 🧬

This project is attempting to have a linear commit history on `main` as well as `develop`. You can read more about the benefits of linear commit histories [here](https://www.bitsnbites.eu/a-tidy-linear-git-history/#:~:text=A%20linear%20history%20is%20simply,branches%20with%20independent%20commit%20histories.).

One common issue when learning to work with linear histories is avoiding merge commits. As an example, if you are on `feature` and another developer merges a pull request to `develop`, using the command `git merge develop` will create a merge commit on the feature branch log. Assuming the code added to develop is unrelated to the feature,this is an unnecessary commit on the feature branch. To avoid this, `git rebase develop` should be used instead.

![image](https://user-images.githubusercontent.com/41388783/199155603-e4c19c1d-2456-4f64-b034-463f831dfdbf.png)

## Branching Strategy 🌲

Creating and pushing a new feature branch is quite simple. Follow the steps below:

1. Checkout to `develop` and pull the most recent changes.
```
git checkout develop
git pull origin develop
```

2. Create a new feature branch using the proper naming convention.
```
git checkout -b <issue_#>-<issue_type>-<branch_name>
```
> NOTE: If you do not have an issue number or type, `NA-0`, should be used instead followed by the branch name.
>
> The branch name is whatever the developer thinks fits best but should be descriptive, lowercase, and hyphen separated.

3. Add you changes to the branch and create a new commit. The commit should contain a descriptive message of the changes or additions you have made
```
git add -A
git commit -m "<descriptive message>"
```
> If develop gets new changes after you have made a commit, be sure to follow the process in Git Workflows to get those changes reflected in your branch.

4. Push your branch to the remote repository
```
git push origin <branch name>
```
> NOTE: This assumes you named the remote `origin`.

5. If you need to make changes to your code after the PR review, you can do so and add, then commit as normal. After you have done this use an interactive rebase to squash the commits into as few as possible. You will then need to force push your branch back to the remote.
```
git rebase -i HEAD~2
...
git push -f origin <branch_name>
```
> NOTE: `HEAD~2` would pick the current HEAD and on commit previous for the rebase. Change this number as needed depending on the number of commits you have. You can read more about rebasing [here](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase).

6. Once the branch is on the remote repository, a pull request can be made.

![image](https://user-images.githubusercontent.com/41388783/199155538-33e720c9-7e61-4e78-8e3f-56fdd512844d.png)
