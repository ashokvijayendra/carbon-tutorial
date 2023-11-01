import React, { Component } from 'react';
import  Button  from '@carbon/react/lib/components/Button';
import  { Accordion, AccordionItem }  from '@carbon/react';

class App extends Component {
  render() {
    return (
      <>
        <Accordion>
      <AccordionItem title="Section 1 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 2 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 3 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 4 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </AccordionItem>
    </Accordion>
      <Button>Button</Button>
      </>
    );
  }
}

export default App;
