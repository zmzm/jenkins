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
  //environment for build running
  agent any
  environment {
    dockerHome = tool 'myDocker'
    nodeJsHome = tool 'myNodeJs'
    PATH = "${dockerHome}/bin:${nodeJsHome}/bin:${PATH}"
  }
  stages {
    stage('Build') {
      steps {
        echo 'Build'
        sh 'node --version'
        sh 'docker version'
        echo "PATH - ${PATH}"
        echo "BULD_NUMBER - ${env.BUILD_NUMBER}"
        echo "BULD_ID - ${env.BUILD_ID}"
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
      echo 'Runs when all stages successfully completed'
    }
    failure {
      echo 'Runs when stage failed'
    }
  }
}