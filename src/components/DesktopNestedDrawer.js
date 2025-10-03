import React, { useEffect, useState, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { menuData } from "../data/menuData";
import useFocusTrap from "../hooks/useFocusTrap";


export default function DesktopNestedDrawer({ width = 480 }) {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([{ title: "Menu", items: menuData }]);
  const [direction, setDirection] = useState("forward");
  const containerRef = useFocusTrap(open);

  useEffect(() => {
    // ensure reset when menuData changes
    setHistory([{ title: "Menu", items: menuData }]);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setHistory([{ title: "Menu", items: menuData }]);
    setDirection("forward");
  };

  const navigateTo = (item) => {
    setDirection("forward");
    setHistory((h) => [...h, { title: item.label, items: item.children }]);
  };

  const goBack = () => {
    if (history.length <= 1) return;
    setDirection("back");
    setHistory((h) => h.slice(0, -1));
  };

  const onItemClick = (item) => {
    if (item.onClick) item.onClick();
    if (!item.children) handleClose();
  };

  const current = history[history.length - 1];

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Menu
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: width },
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column"
          }
        }}
        ModalProps={{ keepMounted: true }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {history.length > 1 ? (
              <IconButton aria-label="Back" onClick={goBack}>
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <Box sx={{ width: 48 }} />
            )}
            <Typography variant="h6" sx={{ ml: 1 }}>
              {current.title}
            </Typography>
          </Box>
          <IconButton aria-label="Close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <Box ref={containerRef} sx={{ position: "relative", flex: 1, overflow: "hidden", p: 2 }}>
          <PanelWrapper key={history.length} enterFrom={direction === "forward" ? "right" : "left"}>
            <MenuPanel title={current.title} items={current.items} onNavigate={navigateTo} onItemClick={onItemClick} />
          </PanelWrapper>
        </Box>
      </Drawer>
    </>
  );
}

function MenuPanel({ items = [], onNavigate, onItemClick }) {
  return (
    <Box role="menu" sx={{ width: "100%" }}>
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <button
            key={it.id}
            onClick={() => (it.children ? onNavigate(it) : onItemClick(it))}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                it.children ? onNavigate(it) : onItemClick(it);
              }
            }}
            className="menu-item"
            aria-haspopup={Boolean(it.children)}
            aria-expanded={false}
            type="button"
            style={{ width: "100%", background: "transparent", border: "none", padding: 0 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: 2 }}>
              {Icon ? <Icon sx={{ opacity: 0.85 }} /> : null}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{it.label}</Typography>
                {it.description && (
                  <Typography variant="body2" color="text.secondary">
                    {it.description}
                  </Typography>
                )}
              </Box>
              {it.children ? <ChevronRightIcon /> : null}
            </Box>
          </button>
        );
      })}
    </Box>
  );
}


function PanelWrapper({ children, enterFrom = "right" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("drawer-panel", enterFrom === "right" ? "enter-from-right" : "enter-from-left");
    requestAnimationFrame(() => {
      el.classList.remove("enter-from-right", "enter-from-left");
      el.classList.add("enter-to-center");
    });
    return () => {
      el.classList.remove("drawer-panel", "enter-from-right", "enter-from-left", "enter-to-center");
    };
  }, [enterFrom]);

  return (
    <Box ref={ref} sx={{ position: "absolute", inset: 0, overflowY: "auto" }} aria-live="polite">
      {children}
    </Box>
  );
}
