# Deployment Instructions for AI/K12 Efficiency Research Paper Site

This document provides instructions for deploying the Docusaurus site containing the "AI Impact on K–12 Classroom Efficiency" research paper to GitHub Pages and Vercel.

## Prerequisites
- Node.js and npm installed.
- Git installed and configured.
- A GitHub repository for your project.
- (For Vercel) A Vercel account and the Vercel CLI installed and logged in (`vercel login`).

## 1. Local Build (Already Completed in Task T007)
Before deployment, ensure your Docusaurus site is built for production. This generates all static assets in the `build` directory.

```bash
cd site
npm install
npm run build
```

The `build` directory will be created inside the `site` folder (e.g., `site/build`). This is the folder that will be deployed.

## 2. Deployment to GitHub Pages

### Method A: Using Docusaurus `deploy` script (Recommended for simplicity)
Docusaurus provides a built-in `deploy` script that automates the deployment to GitHub Pages. This requires your `docusaurus.config.js` to be correctly configured with your GitHub repository details.

1.  **Configure `docusaurus.config.js`** (if not already done):
    Open `site/docusaurus.config.js` and ensure the following fields are set:
    ```javascript
    // ...
    const config = {
      title: 'AI Impact on K–12 Classroom Efficiency',
      tagline: 'Research on AI in Education',
      url: 'https://<YOUR_GITHUB_USERNAME>.github.io',
      baseUrl: '/<YOUR_REPOSITORY_NAME>/', // Replace with your repo name if it's a project page
      organizationName: '<YOUR_GITHUB_USERNAME>', // Usually your GitHub org/user name.
      projectName: '<YOUR_REPOSITORY_NAME>', // Usually your repo name.
      // ...
    };
    // ...
    ```
    - Replace `<YOUR_GITHUB_USERNAME>` with your GitHub username.
    - Replace `<YOUR_REPOSITORY_NAME>` with the name of your GitHub repository.
    - If deploying to a User or Organization Pages site (e.g., `username.github.io`), `baseUrl` should be `/`.

2.  **Deploy Command**:
    Navigate to the `site` directory and run the deploy command:
    ```bash
    cd site
    npm run deploy
    ```
    This command will build your site (if not already built), commit the `build` folder to a `gh-pages` branch, and push it to your GitHub repository. GitHub Pages will then serve your site from this branch.

### Method B: Manual Deployment
If you prefer manual control or encounter issues with the `deploy` script, you can deploy the `build` folder manually.

1.  **Ensure Build is Ready**: Follow step 1 (Local Build) to create the `site/build` directory.

2.  **Initialize `gh-pages` branch (if not exists)**:
    ```bash
    cd site/build
    git init
    git add .
    git commit -m "Deploy to GitHub Pages"
    git branch -M gh-pages
    git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
    git push -u origin gh-pages -f
    ```
    - Replace `<YOUR_GITHUB_USERNAME>` and `<YOUR_REPOSITORY_NAME>` with your details.
    - The `-f` (force) flag is used to overwrite the `gh-pages` branch history. Use with caution.

3.  **Subsequent Deployments**:
    For future updates, after building the site:
    ```bash
    cd site/build
    git add .
    git commit -m "Update deployment"
    git push origin gh-pages -f
    ```

## 3. Deployment to Vercel

Vercel provides a straightforward deployment process, often integrating directly with your Git repository.

### Method A: Using Vercel CLI

1.  **Navigate to Project Root**: Ensure you are in the root directory of your project (where your `site` folder is).
    ```bash
    cd C:\Users\HP\Desktop\Heckathon - AI Book
    ```

2.  **Deploy Command**:
    Run the Vercel deploy command. When prompted, select the `site` directory as your project root and configure as a Docusaurus project.
    ```bash
    vercel
    ```
    - Vercel will detect Docusaurus and configure the build settings automatically.
    - You will be guided through setting up your project on Vercel.
    - The `build` output directory (`site/build`) will be automatically detected and deployed.

### Method B: Git Integration (Vercel Dashboard)

1.  **Push to GitHub**: Ensure your project is pushed to your GitHub repository.

2.  **Import Project in Vercel**: Go to the Vercel dashboard, click "New Project", and import your Git repository.

3.  **Configure Project**: Vercel will automatically detect that it's a Docusaurus project. Ensure the "Root Directory" is set to `site/` (or wherever your Docusaurus project lives relative to the repo root) and that the build command is `npm run build` and output directory is `build`.

4.  **Deploy**: Vercel will then deploy your site. Subsequent pushes to your configured Git branch will trigger automatic redeployments.

---

**Important**: After deployment, verify your site is accessible at the provided URL and functions as expected. If using GitHub Pages, it may take a few minutes for the changes to propagate.
