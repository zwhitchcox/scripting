#!/usr/bin/env node
import {program} from 'commander'

program
  .option('-d, --debug', 'output extra debugging')

program.parse(process.argv);

