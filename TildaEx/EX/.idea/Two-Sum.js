/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let sum = nums[i]+nums[j];
            if (sum==target){
                let result=[i,j];
                return result;
            }else{
                continue;
            }

        }
    }
};

console.log(twoSum([2,6,11,15],21));
