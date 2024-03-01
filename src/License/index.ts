import Utils from "../utils";
import * as types from './types'

export default class License {
  private baseUrl: string =
    "https://corsproxy.io/?" + encodeURIComponent("https://postman-echo.com");
  private utils = new Utils();

  /**
   * Creates a license to publish data to Tiki.
   * @param {string} token - The address token.
   * @param {PostLicenseRequest} postLicenseRequest - An object containing the main information of the license.
   * @returns {PostLicenseRequest} The saved license object.
   */
  public async create(
    token: string,
    postLicenseRequest: types.PostLicenseRequest
  ): Promise<types.PostLicenseRequest> {
    const url = `${this.baseUrl}/${"post"}`;
    return this.utils.handleRequest<types.PostLicenseRequest>(
      url,
      "POST",
      token,
      postLicenseRequest
    );
  }

  /**
   * Retrieves all licenses created for a given address.
   * @param {string} id - The Pointer Record used to identify the licenses. It should be the User ID.
   * @param {string} token - The address token.
   * @returns {RspLicenses} An object containing an array of licenses and a request ID.
   */
  public async get(id: string, token: string): Promise<types.RspLicenses> {
    const url = `${this.baseUrl}/${"get"}?id=${id}`;
    return this.utils.handleRequest<types.RspLicenses>(url, "GET", token);
  }

  /**
   * Verify if a license is valid or not
   * @param {PostGuardRequest} postGuardRequest - An Object containing the pointer record and usecases of a license, the ptr will be use to identify the license
   * @param token - the address token necessary to authenticate the request
   * @returns {RspGuard} - An object containing a boolean and a reason message to confirm the validation or not
   */
  public async guard(
    postGuardRequest: types.PostGuardRequest,
    token: string
  ): Promise<types.RspGuard> {
    const url = `${this.baseUrl}/post`;
    return this.utils.handleRequest<types.RspGuard>(
      url,
      "POST",
      token,
      postGuardRequest
    );
  }
}
