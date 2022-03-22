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
    stage('Checkout') {
      steps {
        echo 'Build'
        sh 'node --version'
        sh 'docker version'
        echo "PATH - ${PATH}"
        echo "BULD_NUMBER - ${env.BUILD_NUMBER}"
        echo "BULD_ID - ${env.BUILD_ID}"
      }
    }
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }
    stage('JS lint') {
      steps {
        sh 'npm run jslint'
      }
    }
    stage('Build Docker image') {
      steps {
        script {
          dockerImage = docker.build("vladjik00raskladjik/currency-exchange-devops:${env.BUILD_TAG}")
        }
      }
    }
    stage('Push Docker image') {
      steps {
        script {
          docker.withRegistry('', 'dockerhub') {
            dockerImage.push()
          }
        }
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