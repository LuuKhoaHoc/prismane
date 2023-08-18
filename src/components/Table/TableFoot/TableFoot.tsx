import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type TableFootProps = BoxProps;

const TableFoot = forwardRef<
  HTMLTableSectionElement,
  PrismaneVersatileWithoutAs<"tfoot", TableFootProps>
>(({ children, className, ...props }, ref) => {
  return (
    <Box
      as="tfoot"
      fw="semibold"
      cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      className={strip(`${className ? className : ""} PrismaneTableFoot-root`)}
      data-testid="prismane-table-foot"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

export default TableFoot;
