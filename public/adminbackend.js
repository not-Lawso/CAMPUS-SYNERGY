app.post("/api/admin/login", async (req, res) => {
    const { email, password } = req.body;
  
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    res.status(200).json({ message: "Login successful" });
  });
  