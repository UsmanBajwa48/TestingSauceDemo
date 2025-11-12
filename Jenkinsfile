pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install dependencies') {
      steps { bat 'npm.cmd install' }
    }

    stage('Install Playwright browsers') {
      steps { bat 'npx playwright install' }
    }

    stage('Test') {
      steps { bat 'npx playwright test --reporter=junit,html' }
    }
  }
}
