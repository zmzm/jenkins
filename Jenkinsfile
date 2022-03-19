// SCRIPTED PIPLINE
/* node {
	stage('Build') {
		echo "Build"
	}
	stage('Test') {
		echo "Test"
	}
} */

// DECLARATIVE PIPLINE
pipeline {
  agent any //environment for build running
  stages {
    stage('Build') {
      steps {
        echo 'Build'
      }
    }
    stage('Test') {
      steps {
        echo 'Test'
      }
    }
  }
  post {
    always {
      echo 'Runs always'
    }
    success {
      echo 'Runs when all stages sccussfully completed'
    }
    failure {
      echo 'Runs when stage failed'
    }
  }
}