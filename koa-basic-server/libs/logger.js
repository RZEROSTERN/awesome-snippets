import bunyan from 'bunyan'

const config = {
    name: 'main',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        }
    ]
}

if ( process.env.NODE_ENV === 'development' ) {
    config.streams.push({
        level: 'info',
        path: '/var/log/development-errors.log'
    });
}

if (process.env.NODE_ENV === 'production') {
    config.streams.push({
        level: 'info',
        path: '/var/log/errors.log'
    });
}

const log = bunyan.createLogger(config);

log.info('Log started at', new Date());

export default log;