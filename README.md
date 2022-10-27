# ADD TO CART Mini-app

## Changelogs

```sh

- v1.0.1 - Adding cart and card components
```

## Installation

```sh
npm i addtocart-mini-app
```

## react 18 higher
```sh
npm i addtocart-mini-app --legacy-peer-deps
```

## Usage


```sh
import {Cart } from "addtocart-mini-app"

// ...
// log exampleData to see the requirements

<TableList {...exampleData} />
```

## Types

```sh
{
  dataLoad: {
    // Table
    rows: { [key: string]: any }[];
    rowsTotal: number;
    subtotal: number | string;
    grandTotal: number | string;
    // Filter List
    filterList: {
      [key: string]: any[];
    };
  };
  dataIn: {
    // View List Title
    title: string;
    tabs: {
      options?: {
        label: string | number;
        value: string | number;
      }[];
    };
    filterSection?: {
      filterProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        options?: {
          name: string;
          key: string[] | string;
          type: "date" | "daterange" | "select";
        }[];
      };
      searchProps?: {
        show?: Boolean;
        placeholder: string;
        string?: number;
      };
      actionProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        options?: {
          name: string;
          action: void;
        }[];
        autoClose?: Boolean;
      };
      redirectionProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        action: void;
      };
    };
    table: {
       importCSV?: {
        show?: Boolean;
        label: string;
        icons?: {
          startIcon?: HTMLElement | string;
          endIcon?: HTMLElement | string;
        };
        action: () => void;
        add: () =>  void;
        import: () =>  void;
      };
      overrideProps: { [key: string]: any };  // override all props of table
      selectionKey?: string;
      columns: GridColDef;
      actionBars: {
        label: string;
        action: void;
      }[];
      rowActions: {
        label: string;
        action: void;
        divider?: Boolean;
        autoClose?: Boolean;
      }[];
    };
    styles: {
      [key: string]: CSSProperties;
    };
  };
  dataOut: (arg0: any) => void;
}
```

## Node Version

```sh
v16.15.0
```

## Peer Dependecies

```sh
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
