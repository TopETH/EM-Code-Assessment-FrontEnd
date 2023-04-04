import axios from "axios";
import { useState } from "react";
import { createContainer } from "unstated-next";

import { Gist } from "types/Gist";

function useGist() {
  const BASE_URL = "https://api.github.com";
  const getAllGistUrl = (username: string) => {
    return `${BASE_URL}/users/${username}/gists`;
  };
  const getSingleGistUrl = (gistId: string) => {
    return `${BASE_URL}/gists/${gistId}`;
  };

  const [username, setUsername] = useState<string>("");
  const [gistsLoading, setGistsLoading] = useState<boolean>(false);
  const [gists, setGists] = useState<Gist[]>([]);
  const [gistsError, setGistsError] = useState<string>("");

  const fetchAllGistsByUsername = async (username: string): Promise<void> => {
    setGistsLoading(true);
    setUsername(username);
    try {
      // fetch all gists
      const response = await axios.get(getAllGistUrl(username));
      console.log(response);
      setGists(response.data);
      return;
    } catch (error) {
      const errorMessage = `Error when fetching gists by username: ${error}`;
      console.error(errorMessage);
      setGistsError(errorMessage);
      throw error;
    } finally {
      setGistsLoading(false);
    }
  };

  return {
    username,
    gistsLoading,
    gists,
    gistsError,
    fetchAllGistsByUsername,
  };
}

export const gist = createContainer(useGist);
