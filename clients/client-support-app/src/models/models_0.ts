// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SupportAppServiceException as __BaseException } from "./SupportAppServiceException";

/**
 * <p>You don't have sufficient permission to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AccountType = {
  MANAGEMENT: "management",
  MEMBER: "member",
} as const;

/**
 * @public
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

/**
 * <p>Your request has a conflict. For example, you might receive this error if you try the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Add, update, or delete a Slack channel configuration before you add a Slack workspace
 *           to your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Add a Slack channel configuration that already exists in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack channel configuration for a live chat channel.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack workspace from your Amazon Web Services account that has an active live chat
 *           channel.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from an Amazon Web Services account
 *           that doesn't belong to an organization.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from a member account,
 *           but the management account hasn't registered that workspace yet for the
 *           organization.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const NotificationSeverityLevel = {
  ALL: "all",
  HIGH: "high",
  NONE: "none",
} as const;

/**
 * @public
 */
export type NotificationSeverityLevel = (typeof NotificationSeverityLevel)[keyof typeof NotificationSeverityLevel];

/**
 * @public
 */
export interface CreateSlackChannelConfigurationRequest {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId: string | undefined;

  /**
   * <p>The channel ID in Slack. This ID identifies a channel within a Slack workspace.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The name of the Slack channel that you configure for the Amazon Web Services Support App.</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>Whether you want to get notified when a support case is created or reopened.</p>
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case has a new correspondence.</p>
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case is resolved.</p>
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * <p>The case severity for a support case that you want to receive notifications.</p>
   *          <p>If you specify <code>high</code> or <code>all</code>, you must specify <code>true</code>
   *       for at least one of the following parameters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>notifyOnAddCorrespondenceToCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnCreateOrReopenCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnResolveCase</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you specify <code>none</code>, the following parameters must be null or
   *         <code>false</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>notifyOnAddCorrespondenceToCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnCreateOrReopenCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnResolveCase</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you don't specify these parameters in your request, they default to
   *           <code>false</code>.</p>
   *          </note>
   * @public
   */
  notifyOnCaseSeverity: NotificationSeverityLevel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that you want to
   * use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to
   * the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
   * @public
   */
  channelRoleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationResult {}

/**
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>Your Service Quotas request exceeds the quota for the service. For example, your Service Quotas request to
 *       Amazon Web Services Support App might exceed the maximum number of workspaces or channels per account, or the maximum
 *       number of accounts per Slack channel.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteAccountAliasRequest {}

/**
 * @public
 */
export interface DeleteAccountAliasResult {}

/**
 * <p>The specified resource is missing or doesn't exist, such as an account alias, Slack
 *       channel configuration, or Slack workspace configuration.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationRequest {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId: string | undefined;

  /**
   * <p>The channel ID in Slack. This ID identifies a channel within a Slack workspace.</p>
   * @public
   */
  channelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationResult {}

/**
 * @public
 */
export interface DeleteSlackWorkspaceConfigurationRequest {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackWorkspaceConfigurationResult {}

/**
 * @public
 */
export interface GetAccountAliasRequest {}

/**
 * @public
 */
export interface GetAccountAliasResult {
  /**
   * <p>An alias or short name for an Amazon Web Services account.</p>
   * @public
   */
  accountAlias?: string | undefined;
}

/**
 * @public
 */
export interface ListSlackChannelConfigurationsRequest {
  /**
   * <p>If the results of a search are large, the API only returns a portion of the results and
   * includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token.
   * When the API returns the last set of results, the response doesn't include a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The configuration for a Slack channel that you added for your Amazon Web Services account.</p>
 * @public
 */
export interface SlackChannelConfiguration {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId: string | undefined;

  /**
   * <p>The channel ID in Slack. This ID identifies a channel within a Slack workspace.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The name of the Slack channel that you configured with the Amazon Web Services Support App for your
   *       Amazon Web Services account.</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>Whether you want to get notified when a support case is created or reopened.</p>
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case has a new correspondence.</p>
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case is resolved.</p>
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * <p>The case severity for a support case that you want to receive notifications.</p>
   * @public
   */
  notifyOnCaseSeverity?: NotificationSeverityLevel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that you want to
   * use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to
   * the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
   * @public
   */
  channelRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSlackChannelConfigurationsResult {
  /**
   * <p>The point where pagination should resume when the response returns only partial
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The configurations for a Slack channel.</p>
   * @public
   */
  slackChannelConfigurations: SlackChannelConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListSlackWorkspaceConfigurationsRequest {
  /**
   * <p>If the results of a search are large, the API only returns a portion of the results and
   * includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token.
   * When the API returns the last set of results, the response doesn't include a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The configuration for a Slack workspace that you added to an Amazon Web Services account.</p>
 * @public
 */
export interface SlackWorkspaceConfiguration {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId: string | undefined;

  /**
   * <p>The name of the Slack workspace.</p>
   * @public
   */
  teamName?: string | undefined;

  /**
   * <p>Whether to allow member accounts to authorize Slack workspaces. Member accounts must be
   *       part of an organization in Organizations.</p>
   * @public
   */
  allowOrganizationMemberAccount?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSlackWorkspaceConfigurationsResult {
  /**
   * <p>The point where pagination should resume when the response returns only partial
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The configurations for a Slack workspace.</p>
   * @public
   */
  slackWorkspaceConfigurations?: SlackWorkspaceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutAccountAliasRequest {
  /**
   * <p>An alias or short name for an Amazon Web Services account.</p>
   * @public
   */
  accountAlias: string | undefined;
}

/**
 * @public
 */
export interface PutAccountAliasResult {}

/**
 * @public
 */
export interface RegisterSlackWorkspaceForOrganizationRequest {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>. Specify the Slack workspace that you want to use for your organization.</p>
   * @public
   */
  teamId: string | undefined;
}

/**
 * @public
 */
export interface RegisterSlackWorkspaceForOrganizationResult {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId?: string | undefined;

  /**
   * <p>The name of the Slack workspace.</p>
   * @public
   */
  teamName?: string | undefined;

  /**
   * <p>Whether the Amazon Web Services account is a management or member account that's part of an organization
   *       in Organizations.</p>
   * @public
   */
  accountType?: AccountType | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationRequest {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId: string | undefined;

  /**
   * <p>The channel ID in Slack. This ID identifies a channel within a Slack workspace.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The Slack channel name that you want to update.</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>Whether you want to get notified when a support case is created or reopened.</p>
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case has a new correspondence.</p>
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case is resolved.</p>
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * <p>The case severity for a support case that you want to receive notifications.</p>
   *          <p>If you specify <code>high</code> or <code>all</code>, at least one of the following
   *       parameters must be <code>true</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>notifyOnAddCorrespondenceToCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnCreateOrReopenCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnResolveCase</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you specify <code>none</code>, any of the following parameters that you specify in your
   *       request must be <code>false</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>notifyOnAddCorrespondenceToCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnCreateOrReopenCase</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notifyOnResolveCase</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current
   *         values by default.</p>
   *          </note>
   * @public
   */
  notifyOnCaseSeverity?: NotificationSeverityLevel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that you want to
   * use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to
   * the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
   * @public
   */
  channelRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationResult {
  /**
   * <p>The team ID in Slack. This ID uniquely identifies a Slack workspace, such as
   * <code>T012ABCDEFG</code>.</p>
   * @public
   */
  teamId?: string | undefined;

  /**
   * <p>The channel ID in Slack. This ID identifies a channel within a Slack workspace.</p>
   * @public
   */
  channelId?: string | undefined;

  /**
   * <p>The name of the Slack channel that you configure for the Amazon Web Services Support App.</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>Whether you want to get notified when a support case is created or reopened.</p>
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case has a new correspondence.</p>
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * <p>Whether you want to get notified when a support case is resolved.</p>
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * <p>The case severity for a support case that you want to receive notifications.</p>
   * @public
   */
  notifyOnCaseSeverity?: NotificationSeverityLevel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that you want to
   * use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to
   * the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
   * @public
   */
  channelRoleArn?: string | undefined;
}
