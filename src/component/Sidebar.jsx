import { Box, UnorderedList, ListItem, Link, Icon, Text } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

function SidebarWidget({ items }) {
  return (
    <Box className="sidebar-widget" p={4} bg="gray.50" borderRadius="md">
      <UnorderedList spacing={2} className="service-list" styleType="none">
        {items.map((item, index) => (
          <ListItem key={index}>
            <Link href="#" _hover={{ textDecoration: "none" }} display="flex" alignItems="center">
              <Icon as={FaAngleDoubleRight} className="arrow" mr={2} />
               <Text color={'red.500'} >{item}</Text>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default SidebarWidget;
