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

  static async getBorders(req, res) {
    try {
      const { countryCode } = req.params;

      if (!countryCode) {
        return res.status(400).json({
          message: 'Country code is required',
        });
      }

      const url = `${countryNameBaseUrl}/CountryInfo/${countryCode}`;

      const response = await axios.get(url);
      const countryInfo = response.data;

      res.json({
        countryInfo: countryInfo,
        message: 'Country borders retrieved successfully',
      });
    } catch (e) {
      if (e.response) {
        res.status(e.response.status).json({
          message: 'Failed to retrieve country borders',
          details: e.response.data,
        });
      } else {
        res.status(500).json({
          message: 'An error occurred while retrieving country borders',
          error: e.message,
        });
      }
    }
  }

  static async getPopulation(_, res) {
    try {
      const response = await axios.get(`${countryInfoBaseUrl}/population`);
      const population = response.data;

      res.json({
        population: population,
        message: 'Population retrieved successfully',
      });
    } catch (e) {
      if (e.response) {
        res.status(e.response.status).json({
          message: 'Failed to retrieve population',
          details: e.response.data,
        });
      } else {
        res.status(500).json({
          message: 'An error occurred while retrieving population',
          error: e.message,
        });
      }
    }
  }

  static async getFlag(_, res) {
    try {
      const response = await axios.get(`${countryInfoBaseUrl}/flag/images`);
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
}
