import { useState } from "react";

const useMutation = () => {
  const [loading, setLoading] = useState(false);
  return { loading };
};

export default useMutation;
