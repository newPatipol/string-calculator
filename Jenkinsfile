pipeline {
    agent any
    stages {
         stage('Prepare') {
            steps {
                // GIT submodule recursive checkout
                checkout scm: [
                        $class: 'GitSCM',
                        branches: scm.branches,
                        doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                        extensions: [[$class: 'CloneOption', noTags: false, shallow: false, depth: 0, reference: '']],
                        userRemoteConfigs: scm.userRemoteConfigs,
                ]
                script {
                    MY_GIT_TAG = sh(returnStdout: true, script: 'git tag -l --points-at HEAD')
                    echo MY_GIT_TAG
                    println(MY_GIT_TAG.contains("deploy"))
                    if (MY_GIT_TAG.contains("test")){
                    echo 'make check'
                    } else if (MY_GIT_TAG.contains("deploy")){
                    echo 'Deploying only because this commit is tagged...'
                    }
                }
            }
         }
        stage('Test') {
            when {
                expression {MY_GIT_TAG.contains("test")}
            }
            steps {
                echo "make take"
            }
        }
        stage('Deploy') {
            when {
                expression {MY_GIT_TAG.contains("deploy")}
            }
            steps {
                echo 'Deploying only because this commit is tagged...'
            }
        }
    }
}