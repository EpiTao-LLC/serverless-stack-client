const dev = {
  STRIPE_KEY: "pk_test_hEFGut5jwhxBZWNRpUsFDF3A00TiBsbPxE",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-nfq07njaswz3"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://u44qyvfer6.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_h3yDET7wR",
    APP_CLIENT_ID: "3enhjqhcin09tfe4u8o5082u8c",
    IDENTITY_POOL_ID: "us-east-2:3972842a-ce2d-4097-87c7-b9310bcf7758"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_hEFGut5jwhxBZWNRpUsFDF3A00TiBsbPxE",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1kkdcv671bbwa"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://0x77814hb1.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Vn0A7266y",
    APP_CLIENT_ID: "36f6iiriun1ri29a9aaerglciu",
    IDENTITY_POOL_ID: "us-east-2:51ea39cd-44d2-498b-b63b-8bcd3b6bff34"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};