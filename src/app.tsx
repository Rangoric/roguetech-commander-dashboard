import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";
import { CssBaseline, Button, ThemeProvider } from "@mui/material";
import { RCDTheme } from "./theme/RCDTheme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { WatchForNewAttackLogs } from "./communication/WatchForNewAttackLogs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(
    <>
      <ThemeProvider theme={RCDTheme}>
        <CssBaseline />
        <Provider store={store}>
          <WatchForNewAttackLogs />
          <h2>Welcome Commander</h2>
          <Button variant={"contained"}>Button</Button>
          <Bar options={options} data={data} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
