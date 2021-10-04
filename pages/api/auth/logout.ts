import withSession from "../../../utils/session";
import axios from "../../../utils/interceptors";

export default withSession(async (req, res) => {
  try {
    delete axios.defaults.headers.common["Authorization"];
    req.session.destroy();
    res.json({ isLoggedIn: false, data: null });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
