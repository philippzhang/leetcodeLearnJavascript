/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var ret = -Number.MAX_VALUE
function max (a, b){
    return a>b ? a : b
}
function getMaxPathS (root){
    if(root==null){
        return 0
    }
    var left = max(0,getMaxPathS(root.left))
    var right = max (0,getMaxPathS(root.right))
    ret = max(ret,left+right+root.val)
    return max(left,right)+root.val
}

var maxPathSum = function (root) {
    ret = -Number.MAX_VALUE
    getMaxPathS(root)
    return ret
};
