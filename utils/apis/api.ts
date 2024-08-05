import { supabase } from "../supabase/supabaseClient";

export const cheksession = async () => {
  //function to check if the user is logged in or not it will be null if not logged in
  try {
    const { data, error } = await supabase.auth.getSession();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  //   console.log(user.email);
  if (user) {
    return user;
  } else {
    return null;
  }
};

export const logOutUser = async () => {
  let { error } = await supabase.auth.signOut();
  if (error) {
    console.log("Error logging out:", error.message);
  } else {
    console.log("User logged out successfully");
  }
};
