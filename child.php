#!/usr/bin/env php
<?php

if($pid = pcntl_fork()) {
  $my_pid = getmypid();
  print "My pid is $my_pid. pcntl_fork() return $pid, this is the parent\n";
} else {
  $my_pid = getmypid();
  print "My pid is $my_pid. pcntl_fork() returned 0, this is the child\n";
}
?>





