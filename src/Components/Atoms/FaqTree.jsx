import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

export default function FaqTree() {
  const [expanded, setExpanded] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

  return (
    <Box
      sx={{
        height: "fit-content",
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        onNodeToggle={handleToggle}
        multiSelect
      >
        <TreeItem nodeId="1" label="Order">
          <TreeItem nodeId="2" label="My orders" />
          <TreeItem nodeId="3" label="Refund" />
          <TreeItem nodeId="4" label="Cancel order" />
        </TreeItem>
        <TreeItem nodeId="5" label="Policy">
          <TreeItem nodeId="6" label="order">
            <TreeItem nodeId="7" label="my order">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              pariatur laudantium accusantium. Accusamus, quas modi veritatis
              illum omnis, vero expedita ullam cupiditate optio molestiae eos
              explicabo cumque rem non ut.
            </TreeItem>
            <TreeItem nodeId="8" label="Cancel order">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
              vitae tempora? Dolor ex sed dicta? Non, voluptate? Ipsum, deserunt
              minus? Velit, sit esse. Voluptatum asperiores earum ab
              consectetur? Provident, magnam.
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="9" label="refund">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            harum saepe consectetur! Neque saepe, inventore at quae distinctio
            sed praesentium a aliquid voluptas amet dolore explicabo repellat
            animi quaerat et?
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}
