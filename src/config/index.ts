import getConfig from './config';
import configSchema from './schema';
import { environment } from '../environment'

const config = getConfig(configSchema, environment);

export default config;
