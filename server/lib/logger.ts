import chalk from 'chalk';
import {vice, mind} from 'gradient-string';

const logger = {
    startup: ()=> {
console.log(vice('=====================================================\n'))
console.log(chalk.bold(mind('██████████████████████ ' + process.env.APP_NAME + ' ███████████████████████\n')))
console.log(vice('=====================================================\n'))
console.log(chalk.bold.green('● ') + 'Version    : ' + process.env.APP_VERSION)
console.log(chalk.bold.green('● ') + 'Base URL   : ' + process.env.HOST)
console.log(chalk.bold.green('● ') + 'API URL    : ' + process.env.HOST + '/api')
console.log(chalk.bold.green('● ') + 'AUTH URL   : ' + process.env.HOST + '/api/auth')
console.log(chalk.bold.green('● ') + 'Docs URL   : ' + process.env.HOST + '/docs')
console.log(vice('\n=====================================================\n'))
    }
}

export default logger
