import { createUser, getUsers } from '../../src/controllers/user.controller';
import { Request, Response } from 'express';

// Mock the prisma module before importing
jest.mock('../../src/lib/prisma', () => {
  return {
    prisma: {
      user: {
        findMany: jest.fn(),
        create: jest.fn()
      }
    }
  };
});

// Import the mocked module after mocking
import { prisma } from '../../src/lib/prisma';

describe('User Controller', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should return list of users', async () => {
    const json = jest.fn();
    const mockUsers = [{ id: 1, name: 'Test User', email: 'test@example.com' }];
    
    // Setup the mock implementation
    (prisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    await getUsers({} as Request, { json } as unknown as Response);

    expect(json).toHaveBeenCalledWith(mockUsers);
    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
  });

  it('should create a user', async () => {
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const mockUser = { id: 2, name: 'Alice', email: 'alice@example.com' };
    
    // Setup the mock implementation
    (prisma.user.create as jest.Mock).mockResolvedValue(mockUser);

    const req = { body: { name: 'Alice', email: 'alice@example.com' } } as Request;
    const res = { status } as unknown as Response;

    await createUser(req, res);

    expect(status).toHaveBeenCalledWith(201);
    expect(json).toHaveBeenCalledWith(mockUser);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: { name: 'Alice', email: 'alice@example.com' }
    });
  });
}); 