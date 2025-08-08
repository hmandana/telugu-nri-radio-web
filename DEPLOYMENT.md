# Deployment Guide

This guide explains how to deploy your Telugu NRI Radio Web application to GitHub Pages.

## Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment. Every time you push to the `main` branch, the application will be automatically built and deployed to GitHub Pages.

### Setup Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the changes

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the "Actions" tab in your GitHub repository
   - Watch the deployment workflow run
   - Once complete, your site will be available at: `https://[username].github.io/telugu-nri-radio-web/`

## Manual Deployment

You can also deploy manually using the provided scripts:

### Option 1: Using npm scripts
```bash
# Install dependencies (if not already installed)
npm install

# Build and deploy
npm run deploy
```

### Option 2: Using the deployment script
```bash
# Make sure the script is executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

## Configuration

The deployment configuration includes:

- **Vite Config**: Configured with the correct base path for GitHub Pages
- **GitHub Actions**: Automated workflow that builds and deploys on every push
- **Package Scripts**: Easy deployment with `npm run deploy`
- **Shell Script**: Manual deployment option with error handling

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure GitHub Pages is enabled and set to use GitHub Actions
2. **Build Fails**: Check that all dependencies are installed and the build runs locally
3. **Routing Issues**: Ensure your React Router is configured for GitHub Pages base path

### Environment Variables:

The build process uses:
- `NODE_ENV=production` for production builds
- Base path is automatically set to `/telugu-nri-radio/` for GitHub Pages

## Site URL

After successful deployment, your site will be available at:
`https://[your-username].github.io/telugu-nri-radio-web/`

Replace `[your-username]` with your actual GitHub username.
