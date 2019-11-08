#!/usr/bin/env node

const program = require('commander');

const { 
  add, 
  list, 
  get,
  remove
} = require('./logic'); 

program
  .version('0.0.1')
  .description('key/value store CLI')

program
  .command('add')
  .alias('a')
  .description('Add a key/value pair')
  .action(() => {
    add(process.argv[3],process.argv[4]);
  });

program
  .command('get <key>')
  .alias('g')
  .description('Get one key/value')
  .action(() => {
    get(process.argv[3]);
  });

program
  .command('list')
  .alias('l')
  .description('list all')
  .action(_id => {
    list();
  });

program
  .command('remove <key>')
  .alias('d')
  .description('Remove key/value')
  .action(() => {
    remove(process.argv[3]);
  });


program.parse(process.argv)
    