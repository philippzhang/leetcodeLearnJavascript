/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
function helper(preStart, preEnd, inStart, inEnd, preorder, inorder){
    if(preStart>preEnd||inStart>inEnd){
        return null
    }
    var root = new TreeNode(preorder[preStart])
    var inRoot = inStart
    while(preorder[preStart]!=inorder[inRoot]){
        inRoot++
    }
    var len = inRoot-inStart
    root.left = helper(preStart+1,preStart+len,inStart,inRoot-1,preorder, inorder)
    root.right = helper(preStart+len+1,preEnd,inRoot+1,inEnd,preorder,inorder)
    return root
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return helper(0,preorder.length-1,0,inorder.length-1,preorder,inorder)
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));