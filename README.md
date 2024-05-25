# Adam-i Frontend (Internship)

## Development Workflow

- Before making a Pull Request (PR), run `npm run postinstall` to perform eslinting and prettier checks. Ensure checks pass before PR.
- PRs must only be made to the `dev` branch.
- After completing a milestone, merge `dev` to `main`, and then `main` to `azure-main` for cloud deployment.
- Use meaningful one-line summaries for your commit messages.
- Pull from the branch before each commit to minimize conflicts.
- Provide a summary and bullet points in the body of your PR.

## Local Development

- Start the development server with `npm run start`; it will open at `localhost:3000`.
- Follow the Airbnb ESLint style guideline for code consistency.

## Cloud Deployment

- Push to `azure-main` to trigger automatic CI/CD updates on the cloud. Monitor the process in the GitHub Actions tab.
- Use `npx prisma studio` for a web dashboard view of the database.

## Guidelines and Configurations

- Ensure your Git configurations are set for case sensitivity and automatic rebasing.
- Run linting and formatting as part of your development routine.

## Additional Notes

- Always ensure that no sensitive information is included in commits to the public repository.
