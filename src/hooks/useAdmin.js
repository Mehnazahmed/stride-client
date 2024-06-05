import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (email) {
      setIsAdminLoading(true);
      fetch(`https://project-stride.vercel.app/users/admin/${email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          if (isMounted) {
            setIsAdmin(data.isAdmin);
            setIsAdminLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching admin status:", error);
          if (isMounted) {
            setIsAdmin(false);
            setIsAdminLoading(false);
          }
        });
    } else {
      setIsAdminLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
