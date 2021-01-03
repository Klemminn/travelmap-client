type EnvParams = {
  api: string;
};

const production: EnvParams = {
  api: `https://api.${window.location.host}/v2`,
};

const local: EnvParams = {
  api: 'http://localhost:8000/api/v2',
};

const env = process.env.REACT_APP_ENV;

const envParams: EnvParams = env === 'production' ? production : local;

export default envParams;
