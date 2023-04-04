import axios from "axios";
import { useState } from "react";
import { createContainer } from "unstated-next";

import { Gist } from "types/Gist";
import { GistDetail } from "types/GistDetail";

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

  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [detail, setGistDetail] = useState<GistDetail | undefined>();
  const [detailError, setDetailError] = useState<string>("");

  const fetchAllGistsByUsername = async (username: string): Promise<void> => {
    setGistsLoading(true);
    setUsername(username);
    try {
      // fetch all gists
      const response = await axios.get(getAllGistUrl(username));
      setGists(response.data);
      setGistsError("");
    } catch (error) {
      const errorMessage = `Error when fetching gists by username: ${error}`;
      setGistsError(errorMessage);
      throw error;
    } finally {
      setGistsLoading(false);
    }
  };

  const fetchSingleGist = async (gistId: string): Promise<void> => {
    setDetailLoading(true);
    try {
      // fetch gist by id
      const response = await axios.get(getSingleGistUrl(gistId));
      setGistDetail(response.data);
      setDetailError("");
    } catch (error) {
      const errorMessage = `Error when fetching gist by id: ${error}`;
      setDetailError(errorMessage);
      throw error;
    } finally {
      setDetailLoading(false);
    }
  };

  return {
    username,
    gistsLoading,
    gists,
    gistsError,
    fetchAllGistsByUsername,

    detailLoading,
    detail,
    detailError,
    fetchSingleGist,
  };
}

export const gist = createContainer(useGist);
