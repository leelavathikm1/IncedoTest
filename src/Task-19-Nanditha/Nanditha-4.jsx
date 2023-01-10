function AxiosComp() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setResponse(res.data);
    });
  }, []);
}
