import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const CustomModal = ({
  children,
  title,
  open,
  setOpen,
  width = "auto",
  maxWidth = "600px",
  fullWidth = false,
  padding = "",
  className = "",
}) => {
  const handleClose = () => {
    setOpen && setOpen(false);
  };

  return (
    <Dialog
      className="customDialog"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{ width: width }}
    >
      <DialogTitle
        id="scroll-dialog-title"
        sx={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#842d73",
          color: "#fff",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        className={className}
        sx={{
          minWidth: 500,
          padding: padding,
        }}
      >
        <Box p={2}>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
