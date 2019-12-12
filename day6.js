inp = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L']

class TreeNode{
    constructor(name, children, parent)
    {
    this.name = name;
    this.children = children;
    this.parent  = parent;
    }
}

function name6A(inp){
    nodes = {}
    for (let line of inp) {
        let [base, orbit] = inp.split(')');
        if (!(base in nodes)){
            //note this wont work because the children need to reference
            //the child object, not just the name
            nodes[base] = new TreeNode(base, [orbit], [])
        }
    }
}
}
let tn1 = new TreeNode("bob", 4, 7);