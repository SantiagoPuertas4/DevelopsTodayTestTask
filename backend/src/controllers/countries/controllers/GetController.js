import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const countryNameBaseUrl = process.env.COUNTRY_NAME_BASE_URL;
const countryInfoBaseUrl = process.env.COUNTRY_INFO_BASE_URL;

export class GetController {
  static async getAll(_, res) {
    try {
      const response = await axios.get(
        `${countryNameBaseUrl}/AvailableCountries`
      );
      const countries = response.data;

      res.json({
        countries: countries,
        message: 'Countries retrieved successfully',
      });
    } catch (e) {
      if (e.response) {
        res.status(e.response.status).json({
          message: 'Failed to retrieve countries',
          details: e.response.data,
        });
      } else {
        res.status(500).json({
          message: 'An error occurred while retrieving countries',
          error: e.message,
        });
      }
    }
  }

  static async getInfo(req, res) {
    try {
      const { countryId } = req.params;

      if (!countryId) {
        return res.status(400).json({
          message: 'Country ID is required',
        });
      }

      const availableCountriesResponse = await axios.get(
        `${countryNameBaseUrl}/AvailableCountries`
      );
      const availableCountries = availableCountriesResponse.data;

      const country = availableCountries.find(
        (item) => item.countryCode === countryId
      );

      if (!country) {
        return res.status(404).json({
          message: 'Country not found',
        });
      }

      const countryCode = country.countryCode;

      const countryInfoResponse = await axios.get(
        `${countryNameBaseUrl}/CountryInfo/${countryCode}`
      );
      const countryInfo = countryInfoResponse.data;

      const populationResponse = await axios.get(
        `${countryInfoBaseUrl}/population`
      );
      const populationData = populationResponse.data.data;

      const population =
        populationData.find((item) => item.country === country.name)
          ?.populationCounts || 'Data not available';

      const flagResponse = await axios.get(`${countryInfoBaseUrl}/flag/images`);
      const flagData = flagResponse.data.data;

      const flagImage =
        flagData.find((item) => item.name === country.name)?.flag ||
        'Data not available';

      res.json({
        countryInfo,
        population,
        flagImage,
        message: 'Country information retrieved successfully',
      });
    } catch (e) {
      if (e.response) {
        res.status(e.response.status).json({
          message: 'Failed to retrieve country information',
          details: e.response.data,
        });
      } else {
        res.status(500).json({
          message: 'An error occurred while retrieving country information',
          error: e.message,
        });
      }
    }
  }
}
