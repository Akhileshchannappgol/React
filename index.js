const parent=[React.createElement("div",{id:"parent"},
             React.createElement("div",{id:"child1"},
             [React.createElement("h1",{id:"head1"},"Iam H1 Heading of parent"),React.createElement("h1",{id:"head1"},"Iam H2 Heading of parent")])),
             React.createElement("div",{id:"Children"},
             React.createElement("div",{id:"child1"},
             [React.createElement("h1",{id:"head1"},"Iam H1 Heading of children"),React.createElement("h1",{id:"head1"},"Iam H2 Heading of childreng ")]))]

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);