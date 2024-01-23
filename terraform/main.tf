# Sample terraform file
provider "aws" {
  region = "us-west-2"
}

resource "aws_elastic_beanstalk_application" "app" {
  name        = "my-app"
  description = "my-app"
}

resource "aws_elastic_beanstalk_environment" "env" {
  name        = "my-env"
  application = aws_elastic_beanstalk_application.app.name
  solution_stack_name = "64bit Amazon Linux 2018.03 v4.14.1 running Node.js"
  
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "LoadBalanced"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "PORT"
    value     = "8080"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "MY_ENV_VARIABLE"
    value     = "my-value"
  }
}