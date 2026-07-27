import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface CompanyData {
  id: string;
  name: string;
  logo: string;
  city: string;
  linkedin_url: string;
  career_url: string;
}

const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "companies.json");

const initialCompanies: CompanyData[] = [
  {
    id: "1",
    name: "10Pearls",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/10pearls/",
    career_url: "https://10pearls.com/careers/"
  },
  {
    id: "2",
    name: "Systems Limited (Islamabad Office)",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/systems-limited/",
    career_url: "https://www.systemsltd.com/careers"
  },
  {
    id: "3",
    name: "NETSOL Technologies (Islamabad Office)",
    logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/netsol-technologies-inc-/",
    career_url: "https://netsoltech.com/careers"
  },
  {
    id: "4",
    name: "Devsinc",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/devsinc/",
    career_url: "https://www.devsinc.com/careers/"
  },
  {
    id: "5",
    name: "VentureDive",
    logo: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/venturedive/",
    career_url: "https://www.venturedive.com/careers/"
  },
  {
    id: "6",
    name: "Motive",
    logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/gomotive/",
    career_url: "https://gomotive.com/company/careers/"
  },
  {
    id: "7",
    name: "Xgrid",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/xgrid.co/",
    career_url: "https://www.xgrid.co/careers"
  },
  {
    id: "8",
    name: "Telenor Microfinance Bank (Technology)",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/telenormicrofinancebank/",
    career_url: "https://telenorbank.pk/careers"
  },
  {
    id: "9",
    name: "NdcTech",
    logo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/ndctech-an-systems-limited-company/",
    career_url: "https://ndctech.net/careers/"
  },
  {
    id: "10",
    name: "RapidCompute",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/rapidcompute/",
    career_url: "https://www.rapidcompute.com/careers"
  },
  {
    id: "11",
    name: "Elixir Technologies",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/elixir-technologies/",
    career_url: "https://www.elixir.com/careers"
  },
  {
    id: "12",
    name: "Ovex Technologies",
    logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/ovex-technologies/",
    career_url: "https://www.ovextech.com/careers"
  },
  {
    id: "13",
    name: "TechVista Systems",
    logo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/techvista-systems/",
    career_url: "https://www.techvistasp.com/careers"
  },
  {
    id: "14",
    name: "Uforia Infotech",
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/uforiainfotech/",
    career_url: "https://uforiainfotech.com/careers"
  },
  {
    id: "15",
    name: "Genesis IT Lab",
    logo: "https://images.unsplash.com/photo-1542744094-3a317272018a?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/genesisitlab/",
    career_url: "https://genesisitlab.com/careers"
  },
  {
    id: "16",
    name: "Smart IS",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/smart-is-international/",
    career_url: "https://smartisinc.com/careers"
  },
  {
    id: "17",
    name: "Innovative Solutions",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/innovative-private-limited/",
    career_url: "https://innovative-pk.com/careers"
  },
  {
    id: "18",
    name: "Cubix Pakistan (Islamabad Office)",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/cubix-co/",
    career_url: "https://www.cubix.co/careers"
  },
  {
    id: "19",
    name: "Mindbridge",
    logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/mindbridge-bpo/",
    career_url: "https://www.mindbridge.com/careers"
  },
  {
    id: "20",
    name: "Emumba",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/emumba/",
    career_url: "https://emumba.com/careers/"
  },
  {
    id: "21",
    name: "SadaPay",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/sadapay/",
    career_url: "https://sadapay.pk/careers/"
  },
  {
    id: "22",
    name: "Educative",
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/educative-inc/",
    career_url: "https://www.educative.io/careers"
  },
  {
    id: "23",
    name: "Afiniti",
    logo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=120&auto=format&fit=crop&q=80",
    city: "Islamabad",
    linkedin_url: "https://www.linkedin.com/company/afiniti/",
    career_url: "https://www.afiniti.com/careers"
  }
];

function getStoredCompanies(): CompanyData[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(initialCompanies, null, 2));
      return initialCompanies;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading database file, using fallback", err);
    return initialCompanies;
  }
}

function saveStoredCompanies(companies: CompanyData[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(companies, null, 2));
  } catch (err) {
    console.error("Error writing database file", err);
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Pak Career Hub API" });
  });

  // GET /api/companies (with search & city query params)
  app.get("/api/companies", (req, res) => {
    const search = ((req.query.search as string) || "").trim().toLowerCase();
    const city = ((req.query.city as string) || "").trim();

    let list = getStoredCompanies();

    if (city && city.toLowerCase() !== "all") {
      list = list.filter(c => c.city.toLowerCase() === city.toLowerCase());
    }

    if (search) {
      list = list.filter(c => 
        c.name.toLowerCase().includes(search) ||
        c.city.toLowerCase().includes(search)
      );
    }

    res.json(list);
  });

  // GET /api/cities (list of cities + company counts)
  app.get("/api/cities", (req, res) => {
    const list = getStoredCompanies();
    const cityMap: Record<string, number> = {};

    list.forEach(c => {
      cityMap[c.city] = (cityMap[c.city] || 0) + 1;
    });

    const standardCities = [
      "Islamabad"
    ];

    const result = standardCities.map(cityName => ({
      name: cityName,
      count: cityMap[cityName] || 0
    }));

    res.json(result);
  });

  // POST /api/companies (Add new software house - Future Ready)
  app.post("/api/companies", (req, res) => {
    const { name, logo, city, linkedin_url, career_url } = req.body;

    if (!name || !city || !linkedin_url || !career_url) {
      res.status(400).json({ error: "Missing required fields: name, city, linkedin_url, career_url" });
      return;
    }

    const current = getStoredCompanies();
    const newCompany: CompanyData = {
      id: String(Date.now()),
      name: name.trim(),
      logo: logo && logo.trim() ? logo.trim() : "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop&q=80",
      city: city.trim(),
      linkedin_url: linkedin_url.trim(),
      career_url: career_url.trim()
    };

    current.unshift(newCompany);
    saveStoredCompanies(current);

    res.status(201).json({ success: true, company: newCompany });
  });

  // Vite development middleware or static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Pak Career Hub server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
