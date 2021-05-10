<?php
$recoveredDebt = file_get_contents('../writeable/ut_Debt.txt');
$Debt = unserialize($recoveredDebt);

var_dump($Debt);
