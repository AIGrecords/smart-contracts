// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.0.9;

contract SimpleStorage {
    unit storedData;

    function set(unit x) public {
        storedData = x;
    }

    function get() public view returns (unit) {
        return storedData;
    }

}
