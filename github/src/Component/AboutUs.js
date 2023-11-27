import React from "react";
import { Box, Typography, Paper } from "@mui/material";


const About = () => {
  return (
    <div>
    <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
      <Box
        sx={{
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">INVENTORY MANAGMENT SYSTEM</Typography>
        <h2>What Is Inventory Managment?</h2>
        <p>
        Inventory Managment refers to the process of ordering, storing, using, and selling a company's inventory. This includes the management of raw materials, components, and finished products, as well as warehousing and processing of such items. There are different types of inventory management, each with its pros and cons, depending on a company’s needs.
        </p>
        <h2>Benefits Of Inventory Managment</h2>
        <p>
        A company's inventory is one of its most valuable assets. In retail, manufacturing, food services, and other inventory-intensive sectors, a company's inputs and finished products are the core of its business. A shortage of inventory when and where it's needed can be extremely detrimental.

At the same time, inventory can be thought of as a liability (if not in an accounting sense). A large inventory carries the risk of spoilage, theft, damage, or shifts in demand. Inventory must be insured, and if it is not sold in time it may have to be disposed of at clearance prices—or simply destroyed.

For these reasons, inventory management is important for businesses of any size. Knowing when to restock inventory, what amounts to purchase or produce, what price to pay—as well as when to sell and at what price—can easily become complex decisions. Small businesses will often keep track of stock manually and determine the reorder points and quantities using spreadsheet (Excel) formulas. Larger businesses will use specialized enterprise resource planning (ERP) software. The largest corporations use highly customized software as a service (SaaS) applications.
        </p>
        <h2>Inventory Managment Methods</h2>
        <p>
        Depending on the type of business or product being analyzed, a company will use various inventory management methods. Some of these management methods include just-in-time (JIT) manufacturing, materials requirement planning (MRP), economic order quantity (EOQ), and days sales of inventory (DSI). There are others, but these are the four most common methods used to analyze inventory.
        </p>
        <h2>Four Types Of Inventory Managment</h2>
        <p>
        The four types of inventory management are just-in-time management (JIT), materials requirement planning (MRP), economic order quantity (EOQ) , and days sales of inventory (DSI). Each inventory management style works better for different businesses, and there are pros and cons to each type.
        </p>
        <h2>Inventory Management Red Flags</h2>
        <p>
        If a company frequently switches its method of inventory accounting without reasonable justification, it is likely its management is trying to paint a brighter picture of its business than what is true. The SEC requires public companies to disclose LIFO reserve that can make inventories under LIFO costing comparable to FIFO costing.
Frequent inventory write-offs can indicate a company's issues with selling its finished goods or inventory obsolescence. This can also raise red flags with a company's ability to stay competitive and manufacture products that appeal to consumers going forward.
        </p>
      </Box>
    </Paper>

    <div style={{display:"grid",gridTemplateColumns:"34% 34% 34%",columnGap:"10px"}} >

      <div >
      <img src="data:image/png;base64,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" alt="" style={{width:"350px",height:"350px"}}></img>
      </div>

      <div>
     <img src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Graphic/inventory-management-strategies-infographic.png" alt="" style={{width:"350px",height:"350px"}}></img>
      </div>

      <div>
      <img src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Photography/Stock/inventory-process-us-en.jpg " alt="" style={{width:"350px",height:"350px"}}></img>
      </div>

      </div>


    </div>
  );
};

export default About;
