import axios from 'axios';

export class GetController {
  static async getAll(_, res) {
    try {
      const response = await axios.get(
        'https://date.nager.at/api/v3/AvailableCountries'
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
}
